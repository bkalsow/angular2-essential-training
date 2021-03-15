import { Pipe } from '@angular/core';

//defines a custom pipe method
@Pipe({
  //defines the pipe name
  name: 'categoryList'
})
export class CategoryListPipe {
  transform(mediaItems) {
    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}