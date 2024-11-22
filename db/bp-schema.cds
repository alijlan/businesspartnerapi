namespace businesspartnerapi;
using { API_BUSINESS_PARTNER as external } from '../srv/external/API_BUSINESS_PARTNER';

entity BusinessPartners as projection on external.A_BusinessPartner {
    key BusinessPartner,
        BusinessPartnerFullName as FullName
}

