import * as React from 'react';
import { AppView } from '../layout';

export const About: React.StatelessComponent<{}> = () => {
  return (
    <AppView>
      <div className="row about-page col-12">
        <h1 className="jumbotron col-2">19 LoginForm</h1>

        <div className="col-10" id="header-title">
          <h1>
            <small>This sample takes as starting point sample "18 Hooks".</small>
          </h1>
          <div className="col-10">
            <h3>
              <small>We are adding a login form using Material-UI.</small>
            </h3>
          </div>
        </div>

        <div className="col-2 top-buffer">
          <h3>Highlights</h3>
          <hr />
          <h3>
            <small>The most interesting parts worth to take a look</small>
          </h3>
        </div>

        <div className="col-10">
          <ul>
            <li className="top-buffer">
              <h4><b>Components:</b></h4>
              <ul className="top-buffer">
                <li>
                  <h4>
                    components/login: <small>New login page.</small>
                  </h4>
                </li>
                <li>
                  <h4>
                    common/components/notification: <small>New common component to show a notification.</small>
                  </h4>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </AppView>
  );
}
