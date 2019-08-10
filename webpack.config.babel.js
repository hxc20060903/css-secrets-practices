import webpack from 'webpack';
import path from 'path';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

module.exports = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    target: 'web',
    devtool: isProduction ? 'cheap-eval-source-map' : 'source-map',
    mode: isProduction ? 'production' : 'development',

    entry: {
      src: path.join(__dirname, 'src/index.tsx'),
    },
    output: {
      chunkFilename: '[name].js',
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
    },

    resolve: {
      extensions: ['.json', '.ts', '.tsx', '.js'], // js for node_modules
      modules: ['node_modules', 'src'],
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new CaseSensitivePathsPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true,
        hash: true,
        filename: 'index.html',
        favicon: 'src/favicon.jpg',
      }),
      !isProduction && new BundleAnalyzerPlugin(),
    ].filter(Boolean),

    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: isProduction
              ? {}
              : {
                getCustomTransformers: () => ({
                  before: [createStyledComponentsTransformer()],
                }),
              },
          },
        ],
      }],
    },

    optimization: {
      occurrenceOrder: true,
    },
  };
};
