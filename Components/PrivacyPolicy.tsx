import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Privacy Policy</Text>

      <Section title="1. Information We Collect">
        <Bullet>Full name, phone number, email address</Bullet>
        <Bullet>Home address for service requests</Bullet>
        <Bullet>Payment information (via secure providers)</Bullet>
        <Bullet>Device & usage information</Bullet>
      </Section>

      <Section title="2. How We Use Your Information">
        <Bullet>Provide and improve services</Bullet>
        <Bullet>Schedule and manage appointments</Bullet>
        <Bullet>Send notifications and confirmations</Bullet>
        <Bullet>Respond to support inquiries</Bullet>
      </Section>

      <Section title="3. Sharing Your Information">
        <Bullet>We do not sell your data</Bullet>
        <Bullet>We may share with service providers & payment processors</Bullet>
        <Bullet>Disclosures required by law</Bullet>
      </Section>

      <Section title="4. Your Data Rights">
        <Bullet>Access and update your info</Bullet>
        <Bullet>Request data deletion</Bullet>
        <Bullet>Opt-out of marketing messages</Bullet>
      </Section>

      <Section title="5. Data Security">
        <Text style={styles.paragraph}>
          We use encryption and secure servers to protect your data. However, no system is completely secure.
        </Text>
      </Section>

      <Section title="6. Third-Party Links">
        <Text style={styles.paragraph}>
          Our app may contain links to third-party sites. We are not responsible for their privacy practices.
        </Text>
      </Section>

      <Section title="7. Children’s Privacy">
        <Text style={styles.paragraph}>
          FixMate is not intended for children under 13. We do not knowingly collect data from children.
        </Text>
      </Section>

      <Section title="8. Changes to This Policy">
        <Text style={styles.paragraph}>
          We may update this Privacy Policy. You’ll be notified via email or in-app if there are significant changes.
        </Text>
      </Section>

      <Section title="9. Contact Us">
        <Text style={styles.paragraph}>
          Email: support@fixmateapp.com
        </Text>
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
    color: 'white'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  date: {
    fontSize: 14,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    color: 'white',

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

export default PrivacyPolicy;
