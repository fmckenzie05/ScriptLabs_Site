# DNS Configuration for Squarespace + Google Workspace

## Complete DNS Records to Add to Your Domain Registrar

### Step 1: Delete All Existing DNS Records
Before adding these records, delete ALL existing A, AAAA, CNAME, MX, TXT records for your domain.

### Step 2: Add Squarespace Hosting Records

| Host/Name | Type | Priority | TTL | Value/Points To |
|-----------|------|----------|-----|-----------------|
| @ | A | - | 4 hours | 198.49.23.144 |
| @ | A | - | 4 hours | 198.49.23.145 |
| @ | A | - | 4 hours | 198.185.159.145 |
| @ | A | - | 4 hours | 198.185.159.144 |
| www | CNAME | - | 4 hours | ext-sq.squarespace.com |
| @ | HTTPS | - | 4 hours | 1 . alpn="h2,http/1.1" ipv4hint="198.185.159.144,198.185.159.145,198.49.23.144,198.49.23.145" |
| _domainconnect | CNAME | - | 4 hours | _domainconnect.domains.squarespace.com |

### Step 3: Add Google Workspace Email Records

| Host/Name | Type | Priority | TTL | Value/Points To |
|-----------|------|----------|-----|-----------------|
| @ | MX | 1 | 1 hour | smtp.google.com |
| @ | TXT | - | 1 hour | v=spf1 include:_spf.google.com ~all |
| google._domainkey | TXT | - | 1 hour | v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwUWp/qBz6GRoYzQ0FpkESkEXGmEBqu0t+XNPOnP3JrG623UXCiyrlBM3Ld5Hlu74t6foP5zKf1+niz918Sk1g+4oC7aGsNH1rKIkRCPyPtk0HsWToLJ55rdSU5RKi27QiXRqJzokMA7icoZjaTUtlONtENbR41QKn8sh4oCZVqYgAFKZqq7chzjWdUhBmGB1M0LnxvP6f7GMvU4/hOjZAwGvs2whEutk1sQIVW7QSvJvJON3Fnq0mpxgAl4lwZ2ALriaFTDw5qoHYQkTAv6Cr+1MHqiIwgIbxwma/U+/mvztjRsCu57yF6U5EeCX/dEYAIUat+ImQQXExwY2PKVh0wIDAQAB |

## Instructions by Popular Registrars

### GoDaddy
1. Log in to your GoDaddy account
2. Go to "My Products" > "Domains"
3. Click "DNS" next to your domain
4. Delete all existing records
5. Add each record using "Add" button
6. For "@" symbol, leave the Host field blank

### Namecheap
1. Log in to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to your domain
4. Select "Advanced DNS" tab
5. Delete all existing records
6. Add new records using "Add New Record"
7. For "@" symbol, use "@" in the Host field

### Google Domains
1. Log in to Google Domains
2. Click on your domain
3. Go to "DNS" in the left menu
4. Delete all existing custom records
5. Add each record in the "Custom records" section
6. For "@" symbol, leave the Host field blank

## Important Notes

### About the @ Symbol
- @ represents your root domain (example.com)
- Some registrars require you to leave this field blank
- Others require you to type "@"
- Some require you to type your full domain name

### TTL (Time To Live)
- You can use the suggested values or your registrar's default
- Lower values (1-4 hours) mean changes propagate faster
- 4 hours or 14400 seconds is standard

### DNS Propagation
- Changes can take 24-48 hours to fully propagate
- You can check progress at: https://www.whatsmydns.net
- Your site may be intermittently available during this time

### HTTPS Record Note
- Not all registrars support HTTPS records
- If your registrar doesn't support it, skip this record
- Squarespace will still work without it

## Verification Steps

After adding all records, verify:

1. **Check Squarespace**:
   - Log in to Squarespace
   - Go to Settings > Domains
   - Your domain should show as "Connected" after propagation

2. **Check Email**:
   - Send a test email to your domain
   - Should be received in Google Workspace

3. **Check Website**:
   - Visit your domain (may take 24-48 hours)
   - Should load your Squarespace site

## Troubleshooting

### "Domain not connected" in Squarespace
- Wait 24-48 hours for full propagation
- Verify all A records are added correctly
- Check that old records were deleted

### Email not working
- Verify MX record points to smtp.google.com
- Check SPF record is added correctly
- May need to re-verify domain in Google Workspace

### Website showing old content
- Clear browser cache
- Try incognito/private browsing mode
- Check DNS propagation status

## Support Contacts

- **Squarespace Support**: https://support.squarespace.com
- **Google Workspace Support**: https://support.google.com/a
- **Your Registrar's Support**: Check their website for contact info