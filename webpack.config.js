const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // Agrega más reglas según tus necesidades (por ejemplo, para procesar estilos, imágenes, etc.)
    ],
  },
  // Otras opciones de configuración
  mode: 'development', // o 'production' según tu entorno
  // Otras opciones de configuración
};
