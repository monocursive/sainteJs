import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/std:accounts-ui';
import MainLayout from '../../ui/layouts/main_layout.js';
import Home from '../../ui/containers/home_container.js';
import Users from '../../ui/containers/users_container.js';
import Profile from '../../ui/containers/user_container.js';
import EventsNew from '../../ui/components/events/events_new';
import EventsContainer from '../../ui/containers/events_container.js';
import { T9n } from 'meteor/softwarerero:accounts-t9n';




export default function() {
  T9n.setLanguage('fr');
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    loginPath: '/login'
  });

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
  
  FlowRouter.route("/events/new", {
    action() {
      mount(MainLayout, {
        content: () => (<EventsNew />)
      });
    }
  });

  FlowRouter.route("/login", {
    action() {
      mount(MainLayout, {
        content: () => (<Accounts.ui.LoginForm />)
      });
    }
  });

  FlowRouter.route("/users", {
    action() {
      mount(MainLayout, {
        content: () => (<Users />)
      });
    }
  });

  FlowRouter.route("/users/:userId", {
    action(params) {
      mount(MainLayout, {
        content: () => (<Profile userId={params.userId} />)
      });
    }
  });

}
