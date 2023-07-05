import { Injectable } from '@nestjs/common';
import { Bookmarks } from './bookmark.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';


@Injectable()
export class BookmarksService {
  private mybookmarks:Bookmarks[] =[
    {
      id:uuidv4(),
      url:'google.com',
      description:'BabakScript yputube chanel',
    }
  ]
  findAll():Bookmarks[]{
    return this.mybookmarks;
  }

  //find by search with query
  find(getBookmarkDto:GetBookmarkDto):Bookmarks[]{
    // console.log(getBookmarkDto);
   let mybookmarks=this.findAll();
  //  console.log(mybookmarks);
   const {url, description}=getBookmarkDto;
    
   if(url){

        // console.log('url iis'+ url);
        // console.log(mybookmarks);
        
        // mybookmarks= this.mybookmarks.filter((bookmarkUrl)=>{
        //     // return console.log(bookmarkUrl.url == url);
        //     if(bookmarkUrl.url == url){
        //       return bookmarkUrl
        //     }
           

        // })
       // if serach anything  with query
       mybookmarks= mybookmarks.filter((bookmarkUrl)=>{
        
        return bookmarkUrl.url.toLocaleLowerCase().includes(url);

        })
       
    }
    // if(description){
    //   mybookmarks= this.mybookmarks.filter((bookmarkDes)=>{
    //     // return console.log(bookmarkUrl.url == url);
    //     if(bookmarkDes.description == description){
    //       return bookmarkDes
    //     }

    // })

    // }
    //
    // if serach anything  with query
    if(description){
      mybookmarks= mybookmarks.filter((bookmarkDes)=>{
        // return console.log(bookmarkUrl.url == url);
       
        return bookmarkDes.description.toLocaleLowerCase().includes(description);
        

    })

    }
    return mybookmarks;
    
  }
  

  //find by id
  findById(id:string): Bookmarks{
    return this.mybookmarks.find((bookmarkId)=>{
      if(bookmarkId.id == id){
        return bookmarkId;
      }
    })
  }



  // createBookmark(url:string,description:string){
  //   const bookmark:Bookmarks={
  //     id:uuidv4(),
  //     url,
  //     description,
  //   };
  //   // console.log(bookmark);
  //   this.bookmarks.push(bookmark);
  //   return bookmark;

  // }

  
  // after you created Dto
  createBookmark(createBookmarkDto:CreateBookmarkDto):Bookmarks{
    const{url,description}=createBookmarkDto
    const bookmark:Bookmarks={
      id:uuidv4(),
      url,
      description,
    };
    // console.log(bookmark);
    this.mybookmarks.push(bookmark);
    return bookmark;

  }

  deleteBookmark(id:string) :void{
    this.mybookmarks=this.mybookmarks.filter((del_bootmark)=>{
      if(del_bootmark.id !== id){
       return console.log(del_bootmark);
      }
    })
  }

  updateBookmark(id:string,description:string):Bookmarks{
    const mybookmark=this.findById(id)
    mybookmark.description=description;
    return mybookmark;
  }

}
