import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseInterceptors
} from '@nestjs/common';
import {CreateCatDto} from "./dto/create-cat.dto";
import {UpdateCatDto} from "./dto/update-cat.dto";
import {CatsService} from "./cats.service";
import {Cat} from "./interfaces/cat.interface";
import {ForbiddenException} from "../common/exceptions/forbidden.exception";
import {ValidationPipe} from "../common/pipes/validation.pipe";
import {LoggingInterceptor} from "../common/interceptors/logging.interceptor";

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
    constructor(private catsService: CatsService) {
    }

    @Post()
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
        return this.catsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
