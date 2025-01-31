import React, { useState,  useEffect } from 'react';

export default function Task({ task }) {
    return (
        <tr>
            <td>{ task.description } - { task.date }</td>
            <td>
                <i class="bi bi-check"></i>
                <i class="bi bi-pencil"></i>
                <i class="bi bi-trash3">2</i>
            </td>

        </tr>
        
    )
}
