import loginScreen from './assets/LoginScreen.png'
import selectDatabaseScreen from './assets/SelectDatabaseScreen.png'
import databaseScreen from './assets/DatabaseScreen.png'

function Capstone() {
  return (
    <section id="capstone" className="section capstone-page">
      <h2>Capstone</h2>
      <p>Keep your business organized with Inventory Warehouse, a simple and secure way for small businesses to manage inventory from anywhere. Create an account, connect to your company, view and update stock levels, and add new items in just a few taps. Inventory Warehouse will be available for Android and iOS.</p>

      <a href="https://github.com/AbeGue02/inventory-warehouse-capstone/tree/MilestoneTwo" target="_blank" rel="noreferrer"><h3>Software Engineering</h3></a>
      <p>The Inventory Warehouse application was originally created for my Mobile Architecture and Programming class as a basic Android Studio project. I selected this artifact for my ePortfolio to showcase my ability to modernize an application's architecture and expand its accessibility. For this enhancement, I transitioned the original Java Android application into a cross-platform application using React Native Expo. This completely reduced development costs and time, as React Native allows me to produce both iOS and Android applications simultaneously from a single codebase. Transitioning the app’s skeleton and UI reinforced my skills in cross-platform environments. Through this enhancement, I successfully met course outcomes #3 and #4 by designing a computing solution that manages the trade-offs of cross-platform design patterns, and by using innovative tools (Expo) to deliver a professional product.</p>

      <a href="https://github.com/AbeGue02/inventory-warehouse-capstone/tree/MilestoneThree" target="_blank" rel="noreferrer"><h3>Algorithms and Data Structures</h3></a>
      <p>This enhancement builds directly upon the Inventory Warehouse React Native application created in the previous enhancement, focusing on its search algorithm. I included this artifact to prove my knowledge of algorithmic principles in solving practical computing problems. By analyzing which data structures benefited the application the most, I successfully gave the search functionality a complete makeover that switched from an inefficient algorithm that went through the entire database to an optimized, instant search algorithm. I made sure to pair this with a UI/UX solution that allows users to seamlessly see exact item matches and broad database searches. Improving these algorithms showed me firsthand how much backend efficiency matters to the front-end user experience. One challenge was balancing the speed of the search with an intuitive interface, as I do not want to overload the user with information. Through these improvements, I fully met course outcomes #3 and #4 by applying appropriate algorithmic principles to solve logic problems. Additionally, by focusing on writing precise commit messages and a clear README, I met outcome #1 by building a collaborative repository environment for future developers.</p>

      <a href="https://github.com/AbeGue02/inventory-warehouse-capstone/tree/MilestoneFour" target="_blank" rel="noreferrer"><h3>Databases</h3></a>
      <p>The final enhancement to the Inventory Warehouse application works on the server-side functionality, database operations, and user authentication. I included this step to demonstrate my capabilities as a full-stack developer. Since the front-end item endpoints were already established in the previous enhancement, my focus went straight into connecting the React Native application to an external Expo Server and a MongoDB database. I also enhanced the application's security by implementing authentication using JSON Web Tokens (JWT) and password hashing. A significant challenge during this phase was working with the authentication flows to make sure the user session remained secure. By implementing password hashing and following secure coding best practices, I successfully met outcome #5 by adopting a security mindset that prevents vulnerabilities and guarantees data privacy. I also solidified outcome #4 by employing software engineering best practices to give the project a professional, real-world software solution.</p>

      <h3>Code Review</h3>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/7M_9-XtSIlE"
        title="Capstone code review"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <h3>Screenshots</h3>
      <div className="card-grid">
        <img
          className="placeholder"
          src={loginScreen}
          alt="Login Screen"
        />
        <img
          className="placeholder"
          src={selectDatabaseScreen}
          alt="Select Database Screen"
        />
        <img
          className="placeholder"
          src={databaseScreen}
          alt="Database Screen"
        />
      </div>

      <h3>Repository</h3>
      <a className="button" href="https://github.com/AbeGue02/inventory-warehouse-capstone" target="_blank" rel="noreferrer">
        View the project on GitHub
      </a>
    </section>
  )
}

export default Capstone
