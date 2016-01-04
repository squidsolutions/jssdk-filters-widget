module.exports = function(grunt) {
    grunt
            .initConfig({
                jshint : {
                    options: {
                        debug: true
                    },
                    all : [ 'src/*.js' ]
                },
                clean : {
                    all : "dist/"
                },
                bower_concat : {
                    all : {
                        dest : 'build/_bower.js',
                        exclude : [ 'squid_api'],
                        bowerOptions : {
                            relative : false
                        }
                    }
                },
                sass: {
                    dist: {
                        files: {
                            'dist/squid_api_filters-widgets.css': 'src/squid_api_filters_styles.scss'
                        },
                        options: {
                            sourcemap: 'none'
                        }
                    }
                },
                concat : {
                    options : {
                        stripBanners : true,
                    },
                    css : {
                        src : ['bower_components/jquery-ui/themes/ui-lightness/jquery-ui.min.css', 'src/*.css' ],
                        dest : 'dist/squid_api_filters-widgets.css',
                    },
                    js : {
                        src : [ 'build/templates.js',
                                'src/*.js' ],
                        dest : 'dist/squid_api_filters-widget.js',
                    }
                },
                handlebars : {
                    options : {
                        namespace : 'squid_api.template',
                        processName : function(filePath) {
                            return filePath.replace(/^.*\//, '').replace(
                                    /\.hbs$/, '');
                        }
                    },
                    all : {
                        files : {
                            "build/templates.js" : [ "src/*.hbs" ]
                        }
                    }
                },
                watch : {
                    js : {
                        files : [ 'src/**/*.*' ],
                        tasks : [ 'default' ]
                    }
                }
            });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', [ 'jshint', 'clean', 'handlebars', 'concat', 'sass']);
};
