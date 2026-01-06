# authentication/resend_email_backend.py
import resend
import os
import logging

logger = logging.getLogger(__name__)

# Initialize Resend API key
resend.api_key = os.getenv('RESEND_API_KEY')


def send_email_via_resend(to, subject, html_body, text_body, reply_to=None):
    """
    Send email via Resend
    
    Args:
        to: Email address (string) or list of addresses
        subject: Email subject
        html_body: HTML content
        text_body: Plain text content
        reply_to: Optional reply-to address
    
    Returns:
        bool: True if successful, False otherwise
    """
    try:
        # Ensure 'to' is a list
        if isinstance(to, str):
            to = [to]
        
        # Prepare email parameters
        params = {
            "from": "Nexxa Auto <noreply@nexxaauto.com>",
            "to": to,
            "subject": subject,
            "html": html_body,
            "text": text_body,
        }
        
        # Add reply_to if provided
        if reply_to:
            params["reply_to"] = reply_to
        
        # Send email
        email = resend.Emails.send(params)
        logger.info(f"Email sent successfully via Resend to {to}: {email}")
        return True
    
    except Exception as e:
        logger.error(f"Failed to send email via Resend: {str(e)}", exc_info=True)
        return False