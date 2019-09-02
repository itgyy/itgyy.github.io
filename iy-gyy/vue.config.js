module.exports = {

	/**	
	 * 解决打包后资源文件找不到原因，是因为路径原因
	 * ./ 是指用户所在的当前目录（相对路径
	 * / 是指根目录（绝对路径，项目根目录），也就是项目根目录
	 * 总结，无论hash模式还是history模式，可以直接使用“/”从项目根目录引入静态文件。
	 */
    publicPath: '/itgyy/',
	outputDir: 'dist',
	assetsDir:'',
	indexPath:'index.html',
	css:{
		loaderOptions: {
		      css: {
		        // 这里的选项会传递给 css-loader
		      },
		      postcss: {
		        // 这里的选项会传递给 postcss-loader
		      }
		    }
	},
	lintOnSave:true,
	
	
	
}