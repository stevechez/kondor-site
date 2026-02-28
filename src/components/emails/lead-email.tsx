interface LeadEmailProps {
  name: string;
  phone: string;
  message: string;
}

export const LeadEmail = ({ name, phone, message }: LeadEmailProps) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
    <h2 style={{ color: '#1e293b' }}>New Project Inquiry</h2>
    <p><strong>From:</strong> {name}</p>
    <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
    <hr style={{ border: '0', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />
    <p style={{ color: '#475569', lineHeight: '1.6' }}>{message}</p>
  </div>
);