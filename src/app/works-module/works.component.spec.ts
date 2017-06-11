import { AngularFireDatabase } from 'angularfire2/database';
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentCoreModule } from '@covalent/core';
import { LocalizeRouterModule } from 'localize-router';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { afDbMock } from '../mocks/works.mock';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from '../shared/shared.module';
import { TagsComponent } from './tags/tags.component';
import { WorksComponent } from './works.component';
import { WorksService } from '../shared/works-service/works.service';

describe('Works Component', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CovalentCoreModule,
        LocalizeRouterModule.forRoot([]),
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),
        LazyLoadImageModule,
        SharedModule
      ],
      declarations: [
        WorksComponent,
        TagsComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        WorksService,
        { provide: AngularFireDatabase, useValue: afDbMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
