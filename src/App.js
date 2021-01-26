import React from 'react';
import { StreamApp, 
  NotificationDropdown, 
  FlatFeed, 
  Activity, 
  LikeButton, 
  CommentField, 
  CommentList,
  StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

// let client = stream.connect('YOUR_API_KEY', 'API_KEY_SECRET');
// let userToken = client.createUserToken("user-one");


class App extends React.Component {
  render () {
    return (
      <StreamApp
        apiKey="API_KEY" // default API from tutorial - "9armx4mqwrkr"
        appId="109041"
        token="API_KEY_SECRET" // default token from tutorial - "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.BsPVDbI87i1V9RRf2oYeJikwfCx1Vuh52IkHatwBx0c"
        >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup = "timeline"
          userId = "user-one" />
        <FlatFeed
          notify
          Activity={(props) =>
              <Activity {...props}
                Footer={() => (
                  <div style={ {padding: '8px 16px'} }>
                    <LikeButton {...props} />
                    <CommentField
                      activity={props.activity}
                      onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} />
                  </div>
                )}
              />
            }
          />
      </StreamApp>
    );
  }
}

export default App;