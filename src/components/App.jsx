import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleChangeButton = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleChangeButton}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

// switch (state) {
//   case 'good':
//     this.setState(prevState => ({ good: prevState.good + 1 }));
//     break;
//   case 'neutral':
//     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//     break;
//   case 'bad':
//     this.setState(prevState => ({ bad: prevState.bad + 1 }));
//     break;
//   default:
//     break;
// }

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };
// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const total = this.countTotalFeedback();
//   return Math.round((good / total) * 100) || 0;
// };
// render() {
//   const { good, neutral, bad } = this.state;
//   const options = Object.keys(this.state);
//   const totalFeedback = this.countTotalFeedback();
//   const positivePercentage = this.countPositiveFeedbackPercentage();
//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={options}
//           onLeaveFeedback={this.handleChangeButton}
//         />
//       </Section>
//       <Section title="Statistics">
//         {!totalFeedback ? (
//           <Notification message="No feedback given" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFeedback}
//             positivePercentage={positivePercentage}
//           />
//         )}
//       </Section>
//     </>
//   );
// }
