import React from 'react';
import './App.css';


function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <section>
        <h1>The New Phonetic Model (NPM)</h1>
        <h2>An alternative to the International Phonetic Alphabet (IPA)</h2>
      </section>

      <section>
        <h3>Why do we need an alternative to the IPA?</h3>
        <p>The IPA, while comprehensive, has limitations in accessibility and clarity for some language learners and professionals. The New Phonetic Model aims to address these issues with a simplified approach.</p>
      </section>

      <section>
        <h3>Overview of the difference</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
          <img src="image1.jpg" alt="Overview Image 1" style={{ width: '45%' }} />
          <img src="image2.jpg" alt="Overview Image 2" style={{ width: '45%' }} />
        </div>
      </section>

      <section>
        <h3>Side by side comparison</h3>
        
        <div>
          <h4>Consonants</h4>
          <table>
            <tbody>
              <tr>
                <td>IPA Consonant</td>
                <td>NPM Consonant</td>
              </tr>
              <tr>
                <td>[p]</td>
                <td>[P]</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        <div>
          <h4>Vowels</h4>
          <table>
            <tbody>
              <tr>
                <td>IPA Vowel</td>
                <td>NPM Vowel</td>
              </tr>
              <tr>
                <td>[a]</td>
                <td>[A]</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        <div>
          <h4>Stops</h4>
          <table>
            <tbody>
              <tr>
                <td>IPA Stop</td>
                <td>NPM Stop</td>
              </tr>
              <tr>
                <td>[b]</td>
                <td>[B]</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        <div>
          <h4>Diphthongs</h4>
          <table>
            <tbody>
              <tr>
                <td>IPA Diphthong</td>
                <td>NPM Diphthong</td>
              </tr>
              <tr>
                <td>[ai]</td>
                <td>[Ai]</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Differences in terminology and philosophy</h3>
        <p>The NPM focuses on a learner-centric approach, aiming to make phonetic transcription more intuitive and accessible.</p>
      </section>

      <section>
        <h3>Donate</h3>
        <p>Your contributions help us develop and refine the New Phonetic Model, making phonetics accessible to everyone.</p>
      </section>

      <section>
        <h3>Contact us</h3>
        <p>Email: contact@newphoneticmodel.org</p>
      </section>
    </div>
  );
}

export default App;
