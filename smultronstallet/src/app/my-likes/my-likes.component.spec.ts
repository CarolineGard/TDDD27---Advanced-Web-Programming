/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { MyLikesComponent } from './my-likes.component';

describe('Component: MyLikes', () => {
  it('should create an instance', () => {
    let component = new MyLikesComponent();
    expect(component).toBeTruthy();
  });
});
