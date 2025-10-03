# DNS Records Backup - ScriptLabs Studios

**Backup Date**: 2025-08-09

## Current DNS Configuration to be Replaced

### Squarespace Default Records

| Host | Type | Priority | TTL | Data |
|------|------|----------|-----|------|
| @ | A | 0 | 4 hrs | 198.49.23.144 |
| @ | A | 0 | 4 hrs | 198.49.23.145 |
| @ | A | 0 | 4 hrs | 198.185.159.145 |
| @ | A | 0 | 4 hrs | 198.185.159.144 |
| www | CNAME | 0 | 4 hrs | ext-sq.squarespace.com |
| @ | HTTPS | 0 | 4 hrs | 1 . alpn="h2,http/1.1" ipv4hint="198.185.159.144,198.185.159.145,198.49.23.144,198.49.23.145" |

### Squarespace Domain Connect

| Host | Type | Priority | TTL | Data |
|------|------|----------|-----|------|
| _domainconnect | CNAME | 0 | 4 hrs | _domainconnect.domains.squarespace.com |

### Google Workspace Records

| Host | Type | Priority | TTL | Data |
|------|------|----------|-----|------|
| google._domainkey | TXT | N/A | 1 hr | v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwUWp/qBz6GRoYzQ0FpkESkEXGmEBqu0t+XNPOnP3JrG623UXCiyrlBM3Ld5Hlu74t6foP5zKf1+niz918Sk1g+4oC7aGsNH1rKIkRCPyPtk0HsWToLJ55rdSU5RKi27QiXRqJzokMA7icoZjaTUtlONtENbR41QKn8sh4oCZVqYgAFKZqq7chzjWdUhBmGB1M0LnxvP6f7GMvU4/hOjZAwGvs2whEutk1sQIVW7QSvJvJON3Fnq0mpxgAl4lwZ2ALriaFTDw5qoHYQkTAv6Cr+1MHqiIwgIbxwma/U+/mvztjRsCu57yF6U5EeCX/dEYAIUat+ImQQXExwY2PKVh0wIDAQAB |
| @ | TXT | N/A | 1 hr | v=spf1 include:_spf.google.com ~all |
| @ | MX | 1 | 1 hr | smtp.google.com |

## Notes

- This backup contains all DNS records provided for the ScriptLabs Studios domain
- These records will configure the domain to:
  - Host the website on Squarespace
  - Use Google Workspace for email services
- Keep this backup in case you need to restore or reference these settings