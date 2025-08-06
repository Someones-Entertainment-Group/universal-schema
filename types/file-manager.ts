export type FileManageItem = {
    id: number
    user_id: number
    file_id: number
    created_at: string
    updated_at: string
    media: {
        id: number
        bucket: string
        file_name: string
        file_type: string
        file_size: string
        c_img: string
        created_at: string
        updated_at: string
    }
}
