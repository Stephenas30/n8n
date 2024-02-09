import { Service } from 'typedi';
import { DataSource, Repository } from '@n8n/typeorm';
import { Variables } from '../entities/Variables';

@Service()
export class VariablesRepository extends Repository<Variables> {
	constructor(dataSource: DataSource) {
		super(Variables, dataSource.manager);
	}
}
