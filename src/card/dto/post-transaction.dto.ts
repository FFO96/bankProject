import {
    IsDefined,
    IsEnum,
    IsNumber,
    IsPositive,
    IsString,
    IsUrl,
    Length,
    Matches,
  } from 'class-validator';
import { TransactionType } from 'src/common/validations';
  
  export class TransactionPostDto {
  
    @IsEnum(TransactionType)
    @IsDefined()
    type!: string;
  
    @IsNumber()
    @IsPositive()
    @IsDefined()
    quantity!: number;
  }
  