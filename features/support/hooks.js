var myHooks = function () {
  this.Before(function (scenario) {
  })

  this.After(function (scenario, done) {
    done()
  })

  this.AfterFeatures((scenario, done) => {
    var reporter = require('cucumber-html-reporter')
    var options = {
      theme: 'bootstrap',
      jsonFile: 'features/reports/report.json',
      output: 'features/reports/index.html',
      reportSuiteAsScenarios: true,
      launchReport: false,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome  54.0.2840.98',
        'Platform': 'Windows 10',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
      }
    }

    reporter.generate(options)
    done()
  })
}

module.exports = myHooks
