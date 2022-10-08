import * as aws from '@pulumi/aws'
import { Config } from '@pulumi/pulumi';

export default (zone: aws.route53.GetZoneResult) => {
    const config = new Config();

    const domainName = 'hexhive-root';

    const gatewayUrl = config.require('gateway-url');
    const frontendUrl = config.require('frontend-url')

    const sslCert = new aws.acm.Certificate(`${domainName}-ssl-certif`, {
        domainName: gatewayUrl,
        subjectAlternativeNames: [frontendUrl],
        validationMethod: "DNS"
    })


    let certValidations = sslCert.domainValidationOptions.apply((domains) => {
        return domains.map((domain) => {
            return new aws.route53.Record(`${domainName}-certValidation-${domain.domainName}`, {
                name: domain.resourceRecordName,
                zoneId: zone.zoneId,
                type: domain.resourceRecordType,
                records: [domain.resourceRecordValue],
                ttl: 60
            })
        })
    });
    // let certValidation = new aws.route53.Record(`${domainName}-certValidation`, {
    //     name: sslCert.domainValidationOptions[0].resourceRecordName,
    //     zoneId: zone.zoneId,
    //     type: sslCert.domainValidationOptions[0].resourceRecordType,
    //     records: sslCert.domainValidationOptions.apply((x) => x.map((x) => x.resourceRecordValue)),
    //     ttl: 60
    // });


    const sslValidation = new aws.acm.CertificateValidation(`${domainName}-ssl-cert-validation`, {
        certificateArn: sslCert.arn,
        validationRecordFqdns: certValidations.apply((y) => y.map((x) => x.fqdn)) //exampleRecord.map((rec) => rec.fqdn)
    })

    return sslCert

}