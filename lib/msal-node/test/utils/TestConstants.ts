/**
 * This file contains the string constants used by the test classes.
 */

export const TEST_CONSTANTS = {
    CLIENT_ID: 'b41a6fbb-c728-4e03-aa59-d25b0fd383b6',
    AUTHORITY: 'https://login.microsoftonline.com/TenantId',
    REDIRECT_URI: 'http://localhost:8080',
    DEFAULT_GRAPH_SCOPE: ['user.read'],
    AUTHORIZATION_CODE:
        '0.ASgAqPq4kJXMDkamGO53C-4XWVm3ypmrKgtCkdhePY1PBjsoAJg.AQABAAIAAAAm-06blBE1TpVMil8KPQ41DOje1jDj1oK3KxTXGKg89VjLYJi71gx_npOoxVfC7X49MqOX7IltTJOilUId-IAHndHXlfWzoSGq3GUmwAOLMisftceBRtq3YBsvHX7giiuSZXJgpgu03uf3V2h5Z3GJNpnSXT1f7iVFuRvGh1-jqjWxKs2un8AS5rhti1ym1zxkeicKT43va5jQeHVUlTQo69llnwQJ3iKmKLDVq_Q25Au4EQjYaeEx6TP5IZSqPPm7x0bynmjE8cqR5r4ySP4wH8fjnxlLySrUEZObk2VgREB1AdH6-xKIa04EnJEj9dUgTwiFvQumkuHHetFOgH7ep_9diFOdAOQLUK8C9N4Prlj0JiOcgn6l0xYd5Q9691Ylw8UfifLwq_B7f30mMLN64_XgoBY9K9CR1L4EC1kPPwIhVv3m6xmbhXZ3efx-A-bbV2SYcO4D4ZlnQztHzie_GUlredtsdEMAOE3-jaMJs7i2yYMuIEEtRcHIjV_WscVooCDdKmVncHOObWhNUSdULAejBr3pFs0v3QO_xZ269eLu5Z0qHzCZ_EPg2aL-ERz-rpgdclQ_H_KnEtMsC4F1RgAnDjVmSRKJZZdnNLfKSX_Wd40t_nuo4kjN2cSt8QzzeL533zIZ4CxthOsC4HH2RcUZDIgHdLDLT2ukg-Osc6J9URpZP-IUpdjXg_uwbkHEjrXDMBMo2pmCqaWbMJKo5Lr7CrystifnDITXzZmmOah8HV83Xyb6EP8Gno6JRuaG80j8BKDWyb1Yof4rnLI1kZ59n_t2d0LnRBXz50PdWCWX6vtkg-kAV-bGJQr45XDSKBSv0Q_fVsdLMk24NacUZcF5ujUtqv__Bv-wATzCHWlbUDGHC8nHEi84PcYAjSsgAA',
    AUTH_CODE_URL:
        'https://login.microsoftonline.com/TenantId/oauth2.0/v2.0/authorize?client_id=b41a6fbb-c728-4e03-aa59-d25b0fd383b6&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2F8080%2F&response_mode=query&scope=user.read%20openid%20profile%20offline_access',
};

export const AUTHENTICATION_RESULT = {
    status: 200,
    body: {
        token_type: 'Bearer',
        scope: 'openid profile User.Read email',
        expires_in: 3599,
        ext_expires_in: 3599,
        access_token:
            'eyJ0eXAiOiJKV1QiLCJub25jZSI6Il9MWUUtN1ZYVkxKUmg3R0kzVDJVVDFoYTJDTi1heVlFRV9fT0RleTBKT3ciLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85MGI4ZmFhOC1jYzk1LTQ2MGUtYTYxOC1lZTc3MGJlZTE3NTkvIiwiaWF0IjoxNTg1MTU1MzkzLCJuYmYiOjE1ODUxNTUzOTMsImV4cCI6MTU4NTE1OTI5MywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFXUUFtLzhQQUFBQWtBeWt4ODRpNjk5eGMwTFNVMkh5UG1UT3VHeHpZY1hod3k1YnZwbTkxRkMyVzZpOUZyYzhETHA0emQ5cEhaVnREK0tCZlN6R1RoMU1pT2xOZVc0RzNoRjFkWE9CVGd1b0lGYW0wd1RHWGh2RWZIaWkvYTJVelU0RXAzTjduWnFZIiwiYWx0c2VjaWQiOiI1OjoxMDAzM0ZGRkE3QzRCQzI4IiwiYW1yIjpbIndpYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJOb2RlQXV0aENvZGUiLCJhcHBpZCI6Ijk5Y2FiNzU5LTJhYWItNDIwYi05MWQ4LTVlM2Q4ZDRmMDYzYiIsImFwcGlkYWNyIjoiMCIsImVtYWlsIjoic2Fnb256YWxAbWljcm9zb2Z0LmNvbSIsImZhbWlseV9uYW1lIjoiR29uemFsZXoiLCJnaXZlbl9uYW1lIjoic2Fnb256YWxAbWljcm9zb2Z0LmNvbSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpcGFkZHIiOiIxMzEuMTA3LjE0Ny4xMjUiLCJuYW1lIjoic2Fnb256YWxAbWljcm9zb2Z0LmNvbSBHb256YWxleiIsIm9pZCI6ImM0ZDNmNjk0LWVmNzQtNDZkYS1hNjU3LWE4NjJhNWJjYzQzOSIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMDM1NUQwNkExIiwic2NwIjoib3BlbmlkIHByb2ZpbGUgVXNlci5SZWFkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiLTZBOHp3OW1rbEtuUVIxSldvTGZyWGk5ckRFcjBod1hBbzhnSTlCQnBINCIsInRpZCI6IjkwYjhmYWE4LWNjOTUtNDYwZS1hNjE4LWVlNzcwYmVlMTc1OSIsInVuaXF1ZV9uYW1lIjoic2Fnb256YWxAbWljcm9zb2Z0LmNvbSIsInV0aSI6Ikhfc0lubDRTcjAyY196NmphaGlhQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCJdLCJ4bXNfc3QiOnsic3ViIjoienh3QTlOMXBFM0pVekwtWUlDTmxoZG9TYTVNbWNveE5tVTk4X1N0OUliMCJ9LCJ4bXNfdGNkdCI6MTU0NTUyMDc2OH0.ZGUvk5G6IvtUVFFFqldzJrsJLlxePaV6FwMNAm6MPqtBO3tSTmErCvg3KEEUnuh4WowDgOJVACTvtlFn6infvdIQdaCK2THZvmpCzHvFX2x7yD3H1KkD23ylmETIX4YWDfVbzjm5coSOzdhjX7-G7KBHQH6DDpCNX3mR7kBxRrcYZvOzBEZZQnDb77cmssUT-ZaImprDlgFlCe4355LjmYT8GruMzhHsC_Yb9gspkl0Tl0rLmJ95tS7xvQtTw2tyQ-AGDmxKaIvK88RmS5RCAlo0aH1vy8rsQZ8dmygyn4h9n-0afJ_MBdfwGlP4Q6hO_Buf8ydZHuRLTn7EbXrfRg',
        refresh_token:
            '0.ASgAqPq4kJXMDkamGO53C-4XWVm3ypmrKgtCkdhePY1PBjsoAJg.AQABAAAAAAAm-06blBE1TpVMil8KPQ41wKTIQA_xfFsGu4Kcj8Vl_xwPdc9zNkAWI9UC-ODdtiCsVcFov0tEWrmd3fsbiL12B8HhRpahiit6Ee81RH0Z1SGe7yOr5wg8bcFYbcNGQHKwtleRoe5Ti-trn2oirb8VSpuaoBU791iwwCBzyjFH7rRJosRRAxdBSw9jNcNYc2VE6zc8Dd_1svKWpX5lfk24A_oUQ8Ghh_Hp-471qiiak7_qF3bqoAnFQ56HsMeCWz9LMPEVUt1pXi3-rzepM77ykJ157tJic1wO9LyHEhx0Xc3WHakAzE_VK075PqRMraQiYrR3k9XQbTv_7ezPvXD_f1GibIdyoRr5-cnqYKO8t0nZFksWei0Bfgo-bQT1u3bUZcnDn26E7zOKxighnwUnuob-RkeGNsay8Ac2UDMyxuVzMaR1Al84Cchb8_0Yte_MtkyUMG92PT0ShiM3EFkZHT30KaWZdMZGrEFsA_PGeEOHYZYV9rycPtZm9zH3ydlm7ruwlnOiEmXrh-VqprHpzoGj-HSO4PXXvNrMrXHTlAhuCtSc15leMTwI8aqrogAtYA-zUnMCiS-Atm6fG4wvW2_aO5Lp1FjI3rQT-OO_JWW27wMNocCYS_7oQB6A4vW2gWsVBMJU2frZ9EwmaApnUOazCQ-6Mtt7KX8uCekBftdrYAURBiMbrdzZEzyCLnarKk4j8dVM9LiGm0mWH-wN37xx_IH0HcZKkwtAskWROzc0yXC_6Du_IZG-Qo3sWsgMzm9G9iNjunvLo-ArTCPgfXWSahqrO-J4QMlmeMeZNn9yNFIqUDPirtU4lZJIoCBURr-3WW4bSxE1KWkH6DFP2vz9KjXEIrvwG1ElAmpEnxwn6ECOb24OYO6bdprwEHhExGDRwp8upPzpQxY9sBPMu0pcvej3my7BdvAJPFn2xCBnSiqrZ4XUs-noNdsyV7IlTpcUXcc4K7sgUPB4DH0Is5qvTRbK1n2MG4-YtVODrMX2Me68TYyEtlOy8l0OFaD4ytij3SrVrncPfZGomxfOhRuzXADOMo6QCDZKEKmArV60lhO0QSYaqw92y8DQLntrJtrAFPIzk_M2CU55Tm9opZAQIBJFXMdia_J-o83t9iAA',
        id_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiI5OWNhYjc1OS0yYWFiLTQyMGItOTFkOC01ZTNkOGQ0ZjA2M2IiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vOTBiOGZhYTgtY2M5NS00NjBlLWE2MTgtZWU3NzBiZWUxNzU5L3YyLjAiLCJpYXQiOjE1ODUxNTUzOTMsIm5iZiI6MTU4NTE1NTM5MywiZXhwIjoxNTg1MTU5MjkzLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwibmFtZSI6InNhZ29uemFsQG1pY3Jvc29mdC5jb20gR29uemFsZXoiLCJvaWQiOiJjNGQzZjY5NC1lZjc0LTQ2ZGEtYTY1Ny1hODYyYTViY2M0MzkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYWdvbnphbEBtaWNyb3NvZnQuY29tIiwic3ViIjoienh3QTlOMXBFM0pVekwtWUlDTmxoZG9TYTVNbWNveE5tVTk4X1N0OUliMCIsInRpZCI6IjkwYjhmYWE4LWNjOTUtNDYwZS1hNjE4LWVlNzcwYmVlMTc1OSIsInV0aSI6Ikhfc0lubDRTcjAyY196NmphaGlhQUEiLCJ2ZXIiOiIyLjAifQ.WliASidSbhPmfnazz0y8JLreOHzecO9EI39DfYv2Vxj_R-WcMcrPgZZvfK_XBV9oTGPGtep3I2U0Etqcd7RNBdnYGFzM3i8IQM247r4K0TpM5n_zfr1n8iROc86uUvduSYUMMCBM_21xsboNnLfNUxbCc2Mp-C-xRfjXxWNHhcJKTSI-BCroFwL6402XLCWNS351QXeq1h_El9vLdf6NpSDhq5IV0CvRn32T-N3VrYKG6TURomfcvqQWeM5vDRv04jqn7HJRzkVGofq4PVExcd-XUzkmoDkKr5X7GxcO0FB-ROLb9PkS6Rvi8HlaGH9EcI5EkHCjLuZ9mV5jpyxRSQ',
    },
};
