'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  init: function () {
    this.log(yosay('Welcome to the marvellous ASP.NET 5 generator!'));
    this.templatedata = {};
  },

  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'applicationName',
      message: 'The name of the application',
      default: 'BasicWebServerApplication'
    }];

    this.prompt(prompts, function (props) {
      this.applicationName = props.applicationName;
      this.namespace = props.applicationName;

      done();
    }.bind(this));
  },

  writing: function () {
    this.directory('src', 'src');

    this.fs.copy(this.templatePath('NuGet.config'), this.destinationPath('NuGet.config'));
  }
});
