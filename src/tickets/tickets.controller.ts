import { Controller, Post, Body, Patch, Delete } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import {
  findTicketDto,
  findTicketEndingDto,
  findTicketRandomDto,
} from './dto/find-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post('/create')
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Post('/find')
  find(@Body() findTicketDto: findTicketDto) {
    return this.ticketsService.find(findTicketDto);
  }

  @Post('/findAvailable')
  findAvailable(@Body() findTicketEndingDto: findTicketEndingDto[]) {
    return this.ticketsService.findAvailable(findTicketEndingDto);
  }

  @Post('/end-with')
  findOne(@Body() findTicketEndingDto: findTicketEndingDto) {
    return this.ticketsService.findTicketEndingWith(findTicketEndingDto);
  }

  @Post('/random')
  update(@Body() findTicketRandomDto: findTicketRandomDto) {
    return this.ticketsService.random(findTicketRandomDto);
  }

  @Patch('/update')
  remove(@Body() updateTicketDto: UpdateTicketDto[]) {
    return this.ticketsService.update(updateTicketDto);
  }

  @Post('/reset')
  reset(@Body() findTicketDto: findTicketDto) {
    return this.ticketsService.reset(findTicketDto);
  }

  @Post('/delete')
  delete(@Body() findTicketDto: findTicketDto) {
    return this.ticketsService.delete(findTicketDto);
  }
}
