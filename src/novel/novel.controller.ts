import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { NovelService } from './novel.service';

@ApiTags('Novel')
@Controller('novel')
export class NovelController {
  constructor(private readonly novelService: NovelService) {}

  @Post()
  create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelService.create(createNovelDto);
  }

  @Get()
  findAll() {
    return this.novelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelService.update(+id, updateNovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelService.remove(+id);
  }
}
