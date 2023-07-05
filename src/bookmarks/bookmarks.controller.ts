import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmarks } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';
import { get } from 'http';
import { query } from 'express';

@Controller('bookmark')
export class BookmarksController {

    constructor(private bookmarksService:BookmarksService){}
    
    // test(){
    //     this.bookmarksService
    // }
//    @Get()//http://localhost/bookmark 
    
//     findAll():Bookmarks[]{
//         return this.bookmarksService.findAll();
//     }

    //for Search with query
    @Get()
    find(@Query() getBookmarkDto:GetBookmarkDto):Bookmarks[] {
        // console.log('Object',Object.keys(getBookmarkDto));
        if(Object.keys(getBookmarkDto).length){
            return this.bookmarksService.find(getBookmarkDto);
        }
        return this.bookmarksService.findAll();
    }







    // @Get()//http://localhost/bookmark/:if
    //now we need to url paramse
    @Get('/:id')

    findById(@Param('id') id:string):Bookmarks{
        return this.bookmarksService.findById(id)
    }


    @Post()
    /*
    //for get requst post from body you can get on two road
    //get  with @body decorator
    // and send all body to an method
    // and send to servers
    //exm --->
        // createBookmark (@Body() Body){
            // console.log(body);
            //for start your programing you can user npm run start:dev
        // }
    //exm --->
    //OR
*/
    // createBookmark(@Body() Body){
    //     console.log(Body);
    // }

    // you can controoler the body on the way and dont allow more select

    // createBookmark(@Body('url') url,@Body('description') description){
    //     console.log(url);
    //     console.log(description);
    // }


    // //now you can calling the post body
    // createBookmark(@Body('url') url, @Body('description') description) : Bookmarks{
    //    return  this.bookmarksService.createBookmark(url, description)
    // }

    //after you created dto  and included thad
    createBookmark(@Body() createBookmarkDto:CreateBookmarkDto) : Bookmarks{
       return  this.bookmarksService.createBookmark(createBookmarkDto)
    }



    @Delete('/:id')
    deleteBookmark(@Param('id') id:string) :void {
        return this.bookmarksService.deleteBookmark(id);
    }


 
    //http://locahost:3000/bookmarks/:id/description
    @Put('/:id/description')
    updateBookmark(
        @Param('id')id:string,
        @Body('description') description:string) :Bookmarks {
        return this.bookmarksService.updateBookmark(id,description);
    }








}
