# Google Sheets Integration Setup

This app sends two types of leads to Google Sheets:
1. **User Lead** - When the user enters their details on the initial screen
2. **Family Member Lead** - When the user completes selecting a wellness path for a family member

## Method 1: Google Apps Script (Free, Recommended)

### Step 1: Create Your Google Sheet

1. Create a new Google Sheet with these columns:
   - **For User Leads sheet:**
     - Timestamp
     - Lead Type
     - User Name
     - User Phone

   - **For Family Member Leads sheet:**
     - Timestamp
     - Lead Type
     - User Name
     - User Phone
     - Family Name
     - Person Label (e.g., "Daughter", "Son")
     - Person Name
     - Person Phone
     - Goal

   OR create a single combined sheet with all columns above.

### Step 2: Create Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add row based on lead type
  if (data.leadType === 'user') {
    sheet.appendRow([
      data.timestamp,
      data.leadType,
      data.userName,
      data.userPhone
    ]);
  } else if (data.leadType === 'family_member') {
    sheet.appendRow([
      data.timestamp,
      data.leadType,
      data.userName,
      data.userPhone,
      data.familyName,
      data.personLabel,
      data.personName,
      data.personPhone,
      data.goal
    ]);
  }
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (disk icon)

### Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon → Select **Web app**
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. **Copy the Web app URL** (looks like: `https://script.google.com/macros/s/...`)

### Step 4: Update Your App

1. Open `src/app/utils/googleSheets.ts`
2. Replace `'YOUR_WEBHOOK_URL_HERE'` with your copied URL:
   ```typescript
   const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```

### Step 5: Test

1. Go through your app flow
2. Check your Google Sheet - new rows should appear automatically!

---

## Method 2: Make.com Webhook (Alternative)

### Step 1: Create Make.com Scenario

1. Go to [make.com](https://make.com) → Create new scenario
2. Add **Webhooks → Custom webhook**
3. Copy the webhook URL

### Step 2: Add Google Sheets Module

1. Click the **+** after the webhook
2. Search for **Google Sheets → Add a row**
3. Connect your Google account
4. Select your spreadsheet and sheet
5. Map the fields:
   - Timestamp → `timestamp`
   - Lead Type → `leadType`
   - User Name → `userName`
   - User Phone → `userPhone`
   - Family Name → `familyName` (for family member leads)
   - Person Label → `personLabel` (for family member leads)
   - Person Name → `personName` (for family member leads)
   - Person Phone → `personPhone` (for family member leads)
   - Goal → `goal` (for family member leads)

6. Add a **Router** if you want to send user leads and family member leads to different sheets

### Step 3: Update Your App

1. Open `src/app/utils/googleSheets.ts`
2. Replace `'YOUR_WEBHOOK_URL_HERE'` with your Make.com webhook URL

---

## Testing

Once configured, the app will automatically send data to Google Sheets:
- When a user enters their details (user lead)
- When they complete a wellness path for a family member (family member lead)

Check your browser console to see the data being sent if the webhook URL is not configured.

---

## Troubleshooting

**Google Apps Script:**
- Make sure "Who has access" is set to "Anyone"
- Redeploy if you make changes to the script
- Check the Apps Script execution logs for errors

**Make.com:**
- Ensure the webhook is active
- Check the scenario execution history for errors
- Verify field mappings match the data structure
