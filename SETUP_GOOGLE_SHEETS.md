# Google Sheets Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Habuild Wellness Leads"
4. Add these column headers in Row 1:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Lead Type | User Name | User Phone | Family Name | Person Label | Person Name | Person Phone | Goal |

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code
3. Copy and paste this EXACT code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add row based on lead type
  if (data.leadType === 'user') {
    // User lead - when someone first enters their details
    sheet.appendRow([
      data.timestamp,
      data.leadType,
      data.userName,
      data.userPhone,
      '', // empty family name
      '', // empty person label
      '', // empty person name
      '', // empty person phone
      ''  // empty goal
    ]);
  } else if (data.leadType === 'family_member') {
    // Family member lead - when they complete a wellness path
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

4. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
5. Name your project (e.g., "Wellness Leads Handler")

### Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description:** "Wellness Leads Webhook" (optional)
   - **Execute as:** Me (your email)
   - **Who has access:** **Anyone** ⚠️ IMPORTANT - must be "Anyone"
5. Click **Deploy**
6. You may need to authorize:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **COPY THE WEB APP URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```

### Step 4: Update Your App Code

1. Open the file `src/app/utils/googleSheets.ts`
2. Find line 3 that says:
   ```typescript
   const GOOGLE_SHEETS_WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE';
   ```
3. Replace `'YOUR_WEBHOOK_URL_HERE'` with your copied URL:
   ```typescript
   const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
   ```
4. Save the file

### Step 5: Test It!

1. Go through your app flow
2. Enter user details (first collection point)
3. Complete a wellness path (second collection point)
4. Check your Google Sheet - you should see 2 new rows!

## What Gets Collected

### Entry Point 1: User Details Screen
When someone clicks "Get Started Now" and enters their details:
- ✅ Timestamp
- ✅ Lead Type: "user"
- ✅ User Name
- ✅ User Phone (with country code)

### Entry Point 2: Wellness Path Completion
When someone completes selecting a wellness path:
- ✅ Timestamp
- ✅ Lead Type: "family_member"
- ✅ User Name (guardian)
- ✅ User Phone (guardian)
- ✅ Family Name
- ✅ Person Label (e.g., "Daughter", "Son")
- ✅ Person Name
- ✅ Person Phone
- ✅ Goal (e.g., "energy-booster", "calm-cultivator")

## Troubleshooting

### ❌ No data appearing in sheet
- Check that "Who has access" is set to "Anyone"
- Make sure you copied the FULL webhook URL (ends with `/exec`)
- Open browser console (F12) to check for errors
- Verify the webhook URL in `googleSheets.ts` has no extra spaces

### ❌ "Authorization required" error
- Redeploy the script
- Make sure you authorized the script in Step 3

### ❌ Getting test data instead of real data
- If you see console.log messages instead of Google Sheet rows, the webhook URL is still set to `'YOUR_WEBHOOK_URL_HERE'`
- Update the URL in `src/app/utils/googleSheets.ts`

### 🔍 How to check what's being sent
Open browser console (F12) and look for messages starting with:
- "User Lead (Configure webhook URL...)" - means webhook not configured
- If no errors and webhook is configured - data is being sent!

## Advanced: Separate Sheets for Each Lead Type

If you want user leads and family member leads in different sheets:

1. Create two sheets in the same spreadsheet:
   - Sheet 1: "User Leads"
   - Sheet 2: "Family Member Leads"

2. Update the Apps Script:
```javascript
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const data = JSON.parse(e.postData.contents);
  
  if (data.leadType === 'user') {
    const userSheet = ss.getSheetByName('User Leads');
    userSheet.appendRow([
      data.timestamp,
      data.userName,
      data.userPhone
    ]);
  } else if (data.leadType === 'family_member') {
    const familySheet = ss.getSheetByName('Family Member Leads');
    familySheet.appendRow([
      data.timestamp,
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

## Done! 🎉

Your app is now sending both lead types to Google Sheets automatically.
