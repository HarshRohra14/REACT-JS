import conf from '../conf.js';
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwrite.endpoint)
            .setProject(conf.appwrite.projectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try{
            return await this.databases.createDocument(
                conf.appwrite.databaseId,
                conf.appwrite.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
         try{
            return await this.databases.updateDocument(
                conf.appwrite.databaseId,
                conf.appwrite.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
         } catch (error) {
            console.error("Error updating post:", error);
            throw error;
         }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwrite.databaseId,
                conf.appwrite.collectionId,
                slug
            )
            return true
        }catch(error) {
            console.log("Error deleting post:", error);
            return false
        }
    }

    async getPost(slug) {
        try{
            return await this.databases.getDocument(
                conf.appwrite.databaseId,
                conf.appwrite.collectionId,
                slug
            )
        } catch (error) {
            console.error("Error fetching post:", error);
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try{
            return await this.databases.listDocuments(
                conf.appwrite.databaseId,
                conf.appwrite.collectionId,
                queries,
                100,
                0,
            )
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwrite.bucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwrite.bucketId,
                fileId
            )
            return true
        } catch (error) {
            console.error("Error deleting file:", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwrite.bucketId,
            fileId,
        );
    }
}

const service = new Service()
export default service