module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				require: true,
				define: true,
				requirejs: true,
				describe: true,
				expect: true,
				it: true
			}
		},
        concat: {
            options: {
                separator: ';\n',
                stripBanners: true,
                sourceMap: true
            },
            dist: {
                src: ['src/libs/tilt.js-master/dest/tilt.jquery.js'],
                dest: 'src/js/vendors.js'
            },
            all: {
                src: ['src/js/vendors.js', 'src/js/main.js'],
                dest: 'src/js/scripts.js'
            }
        },
		uglify: {
			options: {
				compress:true
			},
			dist: {
				src: 'src/js/scripts.js',
				dest: 'dist/js/main.min.js'
			}
		},
		sass: {
			options: {
				style: 'compressed'
			},
			dist: {
				files: {
					'style.css': 'src/scss/style.scss'
				}
			}
		},
        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                ]
            },
            dist: {
                src: 'style.css'
            }
        },
		watch: {
			src: {
				files: ['src/js/*.js', 'src/scss/*.scss'],
				tasks: 'default'
			}
		}
	});

	// Register task related packages
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register default task
	grunt.registerTask('default', ['concat', 'uglify', 'sass', 'postcss']);
};
