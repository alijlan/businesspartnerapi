const cds = require('@sap/cds')

async function readBP () {
    const BPsrv = await cds.connect.to("API_BUSINESS_PARTNER");
    this.on("READ", "BusinessPartners", async(req) => {
        req.query.where("LastName <> ' ' and FirstName <> ' ' ");
        return await BPsrv.transaction(req).send({
            query: req.query,
            headers: {
                apikey: process.env.apikey
            }
        })
    })
}

module.exports = cds.service.impl( readBP );