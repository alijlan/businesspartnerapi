using { businesspartnerapi as e } from '../db/bp-schema.cds';

service BuPaService {
    @readonly entity BusinessPartners as projection on e.BusinessPartners;
}