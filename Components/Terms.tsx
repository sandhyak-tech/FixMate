import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Terms & Conditions</Text>

      <Section title="1. Acceptance of Terms">
        <Text style={styles.paragraph}>
          By using the FixMate app, you agree to be bound by these Terms and our Privacy Policy.
        </Text>
      </Section>

      <Section title="2. Services Offered">
        <Text style={styles.paragraph}>
          FixMate connects users with home service professionals. We do not directly provide services but facilitate bookings and payments.
        </Text>
      </Section>

      <Section title="3. User Responsibilities">
        <Bullet>Provide accurate booking and contact information</Bullet>
        <Bullet>Ensure safe access to your home for the service professional</Bullet>
        <Bullet>Use the app for lawful purposes only</Bullet>
      </Section>

      <Section title="4. Payments & Cancellations">
        <Bullet>All payments are processed securely through third-party gateways</Bullet>
        <Bullet>Late cancellations may incur charges</Bullet>
        <Bullet>Refunds are handled case-by-case</Bullet>
      </Section>

      <Section title="5. Account Termination">
        <Text style={styles.paragraph}>
          We reserve the right to suspend or terminate accounts for misuse, fraud, or violation of these Terms.
        </Text>
      </Section>

      <Section title="6. Limitation of Liability">
        <Text style={styles.paragraph}>
          FixMate is not liable for damages or injuries caused by service providers. We verify professionals but cannot guarantee outcomes.
        </Text>
      </Section>

      <Section title="7. Changes to Terms">
        <Text style={styles.paragraph}>
          These Terms may be updated at any time. Continued use of the app means you accept the changes.
        </Text>
      </Section>

      <Section title="8. Contact Us">
        <Text style={styles.paragraph}>Email: support@fixmateapp.com</Text>
      </Section>
    </ScrollView>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const Bullet = ({ children }: { children: string }) => (
  <Text style={styles.bullet}>{'\u2022'} {children}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  date: {
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: 'white',
  },
  bullet: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    color: 'white',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
    color: 'white',
  },
});

export default TermsAndConditions;
