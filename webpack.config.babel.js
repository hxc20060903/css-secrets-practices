import webpack from 'webpack';
import path from 'path';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const OUTPUT_PATH = path.join(__dirname, 'dist');
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
      path: OUTPUT_PATH,
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
        favicon: 'assets/favicon.jpg',
      }),
      new CopyWebpackPlugin([
        { from: 'assets/', to: path.join(OUTPUT_PATH, 'assets') },
      ]),
      !isProduction && new BundleAnalyzerPlugin(),
    ].filter(Boolean),

    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
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
