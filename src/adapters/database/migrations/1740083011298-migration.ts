import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1740083011298 implements MigrationInterface {
  name = 'Migration1740083011298';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "CVResumes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "fileId" uuid NOT NULL, "result" json NOT NULL, "totalScore" integer NOT NULL, CONSTRAINT "PK_aacba615a18a941bdaba2f5eca9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Files" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "uri" character varying NOT NULL, "displayName" character varying NOT NULL, "mimeType" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "userId" character varying NOT NULL, CONSTRAINT "UQ_465f59b6b0e2abb8458ef1931aa" UNIQUE ("name"), CONSTRAINT "PK_e7e496de757cb609f7043c09f4a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Users" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying, "name" character varying NOT NULL, "surname" character varying NOT NULL, "photoURL" character varying, "providerId" character varying, "firstLoginType" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "LoginTypes" ("type" character varying NOT NULL, CONSTRAINT "PK_b0685ca9458b0f8118d1bc7349b" PRIMARY KEY ("type"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "CVResumes" ADD CONSTRAINT "FK_1ed00a26dfc88542dd8ab467c83" FOREIGN KEY ("fileId") REFERENCES "Files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Files" ADD CONSTRAINT "FK_deba3f56962254d2fd8544cd2c2" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Users" ADD CONSTRAINT "FK_eac466e0194140450d472fd7fc5" FOREIGN KEY ("firstLoginType") REFERENCES "LoginTypes"("type") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Users" DROP CONSTRAINT "FK_eac466e0194140450d472fd7fc5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Files" DROP CONSTRAINT "FK_deba3f56962254d2fd8544cd2c2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "CVResumes" DROP CONSTRAINT "FK_1ed00a26dfc88542dd8ab467c83"`,
    );
    await queryRunner.query(`DROP TABLE "LoginTypes"`);
    await queryRunner.query(`DROP TABLE "Users"`);
    await queryRunner.query(`DROP TABLE "Files"`);
    await queryRunner.query(`DROP TABLE "CVResumes"`);
  }
}
