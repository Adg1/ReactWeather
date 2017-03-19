const React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on react. I have built this for learning react.</p>
      <p>
        Here are some of the tools I have used,
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>- This was the JavaScript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a>- I used Open Weather Map to search weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
