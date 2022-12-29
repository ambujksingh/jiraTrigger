const jiraTask = require('../utility/jiraTask');

module.exports = async function (context, myTimer) {
    try {
        var timeStamp = new Date().toISOString();
        if (myTimer.isPastDue) {
            context.log('JavaScript is running late!');
        }
        let baseUrl = 'https://ers-dev.azurewebsites.net/api/jiraTaskScheduler';
        let results = await jiraTask.initiateTrigger(baseUrl);
        context.log(results)
        context.log('JavaScript timer trigger function ran!', timeStamp);
    } catch (error) {
        console.log(error);
        throw error
    }
}