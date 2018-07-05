import { async, PageFixture, TestBed } from '@angular/core/testing';

import { UserPage } from './index';

describe('UserPage', () => {
  let Page: UserPage;
  let fixture: PageFixture<UserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserPage]
    })
      .compilePages();
  }));

  beforeEach(() => {
    fixture = TestBed.createPage(UserPage);
    Page = fixture.PageInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(Page).toBeTruthy();
  });
});
