import { Resend } from "resend";
import { NextResponse } from "next/server";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

// Contact form notification template
const ContactNotification = ({ senderEmail, subject, message }) => {
  return React.createElement('div', {
    style: { 
      fontFamily: "Arial, sans-serif", 
      maxWidth: "600px", 
      margin: "0 auto",
      backgroundColor: "#f8f9fa",
      padding: "20px"
    }
  }, [
    React.createElement('div', {
      key: 'header',
      style: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "20px",
        borderRadius: "8px 8px 0 0",
        textAlign: "center"
      }
    }, [
      React.createElement('h1', { 
        key: 'title',
        style: { margin: 0, fontSize: "24px" }
      }, '📧 New Contact Form Message')
    ]),
    
    React.createElement('div', {
      key: 'content',
      style: {
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }
    }, [
      React.createElement('div', { key: 'from-section', style: { marginBottom: "20px" } }, [
        React.createElement('h3', { 
          key: 'from-label', 
          style: { color: "#333", marginBottom: "8px" } 
        }, 'From:'),
        React.createElement('p', { 
          key: 'from-value',
          style: { 
            backgroundColor: "#e9ecef", 
            padding: "10px", 
            borderRadius: "4px",
            margin: 0,
            fontSize: "16px"
          }
        }, senderEmail)
      ]),
      
      React.createElement('div', { key: 'subject-section', style: { marginBottom: "20px" } }, [
        React.createElement('h3', { 
          key: 'subject-label', 
          style: { color: "#333", marginBottom: "8px" } 
        }, 'Subject:'),
        React.createElement('p', { 
          key: 'subject-value',
          style: { 
            backgroundColor: "#e9ecef", 
            padding: "10px", 
            borderRadius: "4px",
            margin: 0,
            fontSize: "16px"
          }
        }, subject)
      ]),
      
      React.createElement('div', { key: 'message-section' }, [
        React.createElement('h3', { 
          key: 'message-label', 
          style: { color: "#333", marginBottom: "8px" } 
        }, 'Message:'),
        React.createElement('div', { 
          key: 'message-value',
          style: { 
            backgroundColor: "#f8f9fa", 
            padding: "20px", 
            borderRadius: "4px",
            border: "1px solid #dee2e6",
            fontSize: "16px",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap"
          }
        }, message)
      ])
    ]),
    
    React.createElement('div', {
      key: 'footer',
      style: {
        textAlign: "center",
        marginTop: "20px",
        color: "#6c757d",
        fontSize: "14px"
      }
    }, 'This message was sent from your portfolio contact form.')
  ]);
};

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    // Validate required fields
    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Sending notification email to your account...");

    // Send notification TO YOU (the website owner)
    // This works with sandbox domain since we're sending to your Resend account email
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.FROM_EMAIL}>`,
      to: ["rp20129421@gmail.com"], // Your actual Resend account email
      subject: `Portfolio Contact: ${subject}`,
      react: React.createElement(ContactNotification, { 
        senderEmail: email,
        subject: subject,
        message: message 
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Contact notification sent successfully:", data);
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon." 
    });
    
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ 
      error: err.message || "Failed to send message"
    }, { status: 500 });
  }
}