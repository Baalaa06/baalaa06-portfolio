import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

// Submit contact form to Firestore
export const submitContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'contact-submissions'), {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    
    console.log('Document written with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding document: ', error);
    return { success: false, error: error.message };
  }
};