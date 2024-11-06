import { useState } from "react";

export function CreateCard(props) {
    return (
      <div style={styles.card}>
        <h2 
        style={styles.name}>
        {props.name}
        </h2>
        <p style={styles.description}>{props.description}</p>
        <h3 style={styles.interestsHeader}>Interests</h3>
        <ul style={styles.interestsList}>
          {props.interests.map((interest) => (
            <li key={interest} style={styles.interestItem}>
              {interest}
            </li>
          ))}
        </ul>
        <div style={styles.socialLinks}>
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>
            LinkedIn
          </a>
          <br />
          <a href={props.twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Twitter
          </a>
          {props.otherSocialMedia && (
            <a href={props.otherSocialMedia} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {props.otherSocialMedia.label}
            </a>
          )}
        </div>
      </div>
    );
  }
  const styles={
    card:{
        border: '1px solid #000',
        borderRadius: '8px',
        padding: '20px'
    },
    name:{
        margin:'0px',
        fontsize:'24px',
        color:'#000',
        fontWeight:'bold'
    },
    description:{
        margin:'0px',
        color:'#000',
        padding:'10px 0px'
    }
    ,
    interestsHeader:{
        margin:'0px',
        fontWeight:'bold'
    },
    interestsList:{
        padding:'0px',
        listStyleType:'none',
    },
    socialLinks:{
        padding:'10px 2px',
        display:'flex'
    },
    link: {
        textDecoration: 'none',
        color: '#fff', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#007BFF', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      },
      interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
      },
      interestsHeader: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333',
      },
      interestsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      },
  }