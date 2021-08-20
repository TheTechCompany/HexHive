var aws = require('aws-sdk');
var ecs = new aws.ECS();

exports.handler = function(event, context) {
    console.log('Received event:');
    console.log(JSON.stringify(event, null, '  '));

    var params = {
        taskDefinition: event.task,
        cluster: 'default',
        networkConfiguration: {
            awsvpcConfiguration: {  subnets: ["subnet-2953be61"]}
        },
        launchType: "FARGATE",
        overrides: {
            containerOverrides: [
                {
                    name: event.container,
                    environment: [
                        {
                            name: 'BLOB', 
                            value: event.file
                        }
                    ]
                }
            ]
        },
        count: 1
    };

    ecs.runTask(params, function (err, data) {
        if (err) { console.warn('error: ', "Error while starting task: " + err); }
        else { console.info('Task ' + event.task + ' started: ' + JSON.stringify(data.tasks))}
    });
    
};
