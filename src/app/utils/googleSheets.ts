const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

async function insertLead(data: Record<string, string>) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.log('⚠️ Supabase not configured in .env:', data);
    return;
  }
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error('Failed to save lead:', error);
  }
}

export async function sendUserLeadToGoogleSheets(data: {
  userName: string;
  userPhone: string;
}) {
  await insertLead({
    lead_type: 'user',
    user_name: data.userName,
    user_phone: data.userPhone
  });
}

export async function sendFamilyMemberLeadToGoogleSheets(data: {
  userName: string;
  userPhone: string;
  familyName: string;
  personLabel: string;
  personName: string;
  personPhone: string;
  goal: string;
}) {
  await insertLead({
    lead_type: 'family_member',
    user_name: data.userName,
    user_phone: data.userPhone,
    family_name: data.familyName,
    person_label: data.personLabel,
    person_name: data.personName,
    person_phone: data.personPhone,
    goal: data.goal
  });
}
