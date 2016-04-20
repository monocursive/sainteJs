import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/std:accounts-ui';
import MainLayout from '../../ui/layouts/main_layout.js';
import Home from '../../ui/containers/home_container.js';
import EventsContainer from '../../ui/containers/events_container.jsx';


export default function() {

  FlowRouter.route('/', {
      action() {
        mount(MainLayout, {
          content: () => (<Home />)
        });
      }
  });
  FlowRouter.route('/events', {
      action() {
        mount(MainLayout, {
          content: () => (<EventsContainer />)
        });
      }
  });
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    loginPath: '/login'
  });

  FlowRouter.route("/login", {
    action(params) {
      mount(MainLayout, {
        content: () => (<Accounts.ui.LoginForm />)
      });
    }
  });

}
