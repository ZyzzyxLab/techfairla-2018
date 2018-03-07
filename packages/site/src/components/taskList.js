import React, { Component } from 'react';
import propTypes from 'prop-types';
//import CSS

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';


//Get Task data from graphQL

const GET.TASK = gql`
  {
    task {
      //Whatever data
    }
  }
`;

