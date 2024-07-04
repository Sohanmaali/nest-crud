import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-item.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    console.log('call');
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log('call');

    return this.userService.create(createUserDto);
  }

  @Put(':id')
  async put(
    @Param('id') id: String,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @Body() createdUserDto: CreateUserDto,
  ): Promise<any> {
    return this.userService.delete(id);
  }
}
