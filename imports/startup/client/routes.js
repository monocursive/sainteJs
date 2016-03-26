import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../../ui/layouts/main_layout.jsx';
import Home from '../../ui/containers/home_container.js';
import EventsContainer from '../../ui/containers/events_container.jsx';


export default function() {

  FlowRouter.route('/', {
      action: function() {
        mount(MainLayout, {
          content: () => (<Home />)
        });
      }
  });
  FlowRouter.route('/events', {
      action: function() {
        mount(MainLayout, {
          content: () => (<EventsContainer />)
        });
      }
  });

}
